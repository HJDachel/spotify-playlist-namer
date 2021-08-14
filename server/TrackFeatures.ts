import express, { Request, Response, NextFunction } from 'express';
import { Track, Average, Ranges } from './types';
import { spotifyRanges, wordsRanges } from './Ranges';
import { words } from './words';
const lc = require('linear-converter-to-go');


export const generateName = (request: Request, response: Response, next: NextFunction): void => {
    let average : Average = getAverages(request.body.audio_features);
    let scaledAverage : Average = scaleAverage(spotifyRanges, wordsRanges, average);
    
    const res = {
        name: selectWords(scaledAverage, 2),
        average: scaledAverage
    };
    response.json(res);
};

const getAverages = (tracks: Track[]): Average => {
    let playlistSum: Average = tracks.reduce(sumProperty);

    const playlistAverage: Average = {
        danceability: playlistSum.danceability / tracks.length,
        energy: playlistSum.energy / tracks.length,
        valence: playlistSum.valence / tracks.length
    };

    return playlistAverage;
}

const sumProperty = (accumulator: Track, currTrack: Track): Track => {
    let sum: Average = {
        danceability: accumulator.danceability + currTrack.danceability,
        energy: accumulator.energy + currTrack.energy,
        valence: accumulator.valence + currTrack.valence
    };
    return sum;
}

const scaleAverage = (oldRanges: Ranges, newRanges: Ranges,
    average: Average): Average => {
        const scaledAverage: Average = {
            danceability: lc.convert([[oldRanges.danceabilityRange.min,oldRanges.danceabilityRange.max],[newRanges.danceabilityRange.min,newRanges.danceabilityRange.max]], average.danceability),
            energy: lc.convert([[oldRanges.energyRange.min,oldRanges.energyRange.max],[newRanges.energyRange.min,newRanges.energyRange.max]], average.energy),
            valence: lc.convert([[oldRanges.valenceRange.min,oldRanges.valenceRange.max],[newRanges.valenceRange.min,newRanges.valenceRange.max]], average.valence)

        };
        return scaledAverage;
}

const selectWords = (scaledAverage: Average, numberOfWords: number): Array<string> => {
    const possibleWords= words.filter((word) => {
        return parseFloat(word.ValenceMean) >= (scaledAverage.valence - .03) && parseFloat(word.ValenceMean) <= (scaledAverage.valence + .03)
    });
    const firstWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
    let secondWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
    while (secondWord === null  || secondWord === firstWord) {
        secondWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
    }
    return [firstWord.Description, secondWord.Description];
}