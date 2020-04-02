import Immutable from "seamless-immutable";
import {
  ALL_STATS_FAILURE,
  ALL_STATS_REQUEST,
  ALL_STATS_SUCCESS,
  TIMELINE_REQUEST,
  TIMELINE_SUCCESS,
  TIMELINE_FAILURE,
} from "../constants/dashboard";

const initialState = Immutable({
  statsRsf: false,
  stats: {},
  timelineRsf: false,
  timeline: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_STATS_REQUEST:
      return state.merge({ statsRsf: true });
    case ALL_STATS_SUCCESS:
      return state.merge({ statsRsf: false, stats: action.payload });
    case ALL_STATS_FAILURE:
      return state.merge({ statsRsf: false, error: action.payload });
    case TIMELINE_REQUEST:
      return state.merge({ timelineRsf: true });
    case TIMELINE_SUCCESS:
      return state.merge({ timelineRsf: false, timeline: action.payload });
    case TIMELINE_FAILURE:
      return state.merge({ timelineRsf: false, error: action.payload });
    default:
      return state;
  }
};