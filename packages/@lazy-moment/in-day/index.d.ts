import moment, { MomentInput, DurationInputArg2 } from 'moment';
export declare function lnMomentMonth<M extends MomentInput>(m: M): {
    input: M;
    baseMoment: moment.Moment;
    lastMoment: moment.Moment;
    nextMoment: moment.Moment;
};
export declare function lnMomentDay<M extends MomentInput>(m: M): {
    input: M;
    baseMoment: moment.Moment;
    lastMoment: moment.Moment;
    nextMoment: moment.Moment;
};
export declare function lnMomentYear<M extends MomentInput>(m: M): {
    input: M;
    baseMoment: moment.Moment;
    lastMoment: moment.Moment;
    nextMoment: moment.Moment;
};
export declare function lnMoment<M extends MomentInput>(m: M, unit: DurationInputArg2): {
    input: M;
    baseMoment: moment.Moment;
    lastMoment: moment.Moment;
    nextMoment: moment.Moment;
};
export declare function firstEndOfMonth<M extends MomentInput>(m: M): {
    input: M;
    baseMoment: moment.Moment;
    firstDayOfMonth: moment.Moment;
    endDayOfMonth: moment.Moment;
};
