export interface Track {
    danceability:     number;
    energy:           number;
    key?:              number;
    loudness?:         number;
    mode?:             number;
    speechiness?:      number;
    acousticness?:     number;
    instrumentalness?: number;
    liveness?:         number;
    valence:          number;
    tempo?:            number;
    type?:             string;
    id?:               string;
    uri?:              string;
    track_href?:       string;
    analysis_url?:     string;
    duration_ms?:      number;
    time_signature?:   number;
}

export interface Average {
    danceability:     number;
    energy:           number;
    valence:          number;
}

export interface Ranges {
    danceabilityRange: Range;
    energyRange: Range;
    valenceRange: Range;    
}

interface Range {
    min: number;
    max: number;
}