import {
  updateDate,
  UPDATE_DATE,
  UPDATE_NATURE,
  updateNature,
  UPDATE_KIND,
  updateKind,
  UPDATE_MEASURE,
  updateMeasure,
  UPDATE_CONTEXTS,
  updateContexts,
  UPDATE_COMMENT,
  updateComment,
  RESET_EVENT,
  resetEvent
} from "./event.action";
import event from "./event.reducer";
import {
  getEventDateSelector,
  getEventNatureSelector,
  getEventKindSelector,
  getEventMeasureSelector,
  getEventContextsSelector
} from "./event.selector";

describe("# event", () => {
  describe("## actions", () => {
    it("should create an action to update selected date", () => {
      const date = "2019-07-01T13:42:22.928Z";
      const expectedAction = {
        type: UPDATE_DATE,
        date
      };
      expect(updateDate(date)).toEqual(expectedAction);
    });
    it("should create an action to update nature", () => {
      const nature = "miction";
      const expectedActionn = {
        type: UPDATE_NATURE,
        nature
      };
      expect(updateNature(nature)).toEqual(expectedActionn);
    });
    it("should create an action to update kind", () => {
      const kind = "normale";
      const expectedAction = {
        type: UPDATE_KIND,
        kind
      };
      expect(updateKind(kind)).toEqual(expectedAction);
    });
    it("should create an action to update measure", () => {
      const measure = "++";
      const expectedAction = {
        type: UPDATE_MEASURE,
        measure
      };
      expect(updateMeasure(measure)).toEqual(expectedAction);
    });
    it("should create an action to update context", () => {
      const contexts = ["fuite"];
      const expectedAction = {
        type: UPDATE_CONTEXTS,
        contexts
      };
      expect(updateContexts(contexts)).toEqual(expectedAction);
    });
    it("should create an action to update comment", () => {
      const comment = "Allez !";
      const expectedAction = {
        type: UPDATE_COMMENT,
        comment
      };
      expect(updateComment(comment)).toEqual(expectedAction);
    });
    it("should create an action to reset event", () => {
      const expectedAction = {
        type: RESET_EVENT
      };
      expect(resetEvent()).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return the initial state", () => {
      const initialState = {
        date: "2019-07-01T13:42:22.928Z",
        kind: "",
        nature: "",
        measure: "",
        context: [],
        comment: ""
      };
      expect(event(initialState, {})).toEqual(initialState);
    });

    it("should handle UPDATE_DATE", () => {
      expect(
        event(
          { date: new Date() },
          {
            type: UPDATE_DATE,
            date: "2019-07-01T13:42:22.928Z"
          }
        )
      ).toEqual({
        date: "2019-07-01T13:42:22.928Z"
      });
    });

    it("should handle UPDATE_NATURE", () => {
      expect(
        event(
          { nature: "" },
          {
            type: UPDATE_NATURE,
            nature: "miction"
          }
        )
      ).toEqual({
        nature: "miction"
      });
    });

    it("should handle UPDATE_KIND", () => {
      expect(
        event(
          { kind: "" },
          {
            type: UPDATE_KIND,
            kind: "normale"
          }
        )
      ).toEqual({
        kind: "normale"
      });
    });

    it("should handle UPDATE_MEASURE", () => {
      expect(
        event(
          { measure: "" },
          {
            type: UPDATE_MEASURE,
            measure: "+++"
          }
        )
      ).toEqual({
        measure: "+++"
      });
    });

    it("should handle UPDATE_CONTEXT", () => {
      expect(
        event(
          { contexts: [] },
          {
            type: UPDATE_CONTEXTS,
            contexts: ["fuite"]
          }
        )
      ).toEqual({ contexts: ["fuite"] });
    });

    it("should handle UPDATE_COMMENT", () => {
      expect(
        event(
          { comment: [] },
          {
            type: UPDATE_COMMENT,
            comment: "En soirée"
          }
        )
      ).toEqual({ comment: "En soirée" });
    });

    it("should handle RESET_EVENT", () => {
      const initialState = {
        date: new Date(),
        kind: "",
        nature: "",
        measure: "",
        contexts: [],
        comment: ""
      };
      expect(
        event(
          {
            date: "2019-07-01T13:42:22.928Z",
            kind: "normale",
            nature: "miction",
            measure: "+++",
            contexts: [],
            comment: "...."
          },
          {
            type: RESET_EVENT
          }
        )
      ).toEqual(initialState);
    });
  });

  describe("## selectors", () => {
    it("should return 2019-07-01T13:42:22.928Z for date", () => {
      const store = {
        Event: {
          date: "2019-07-01T13:42:22.928Z"
        }
      };
      expect(getEventDateSelector(store)).toEqual("2019-07-01T13:42:22.928Z");
    });

    it("should return miction for nature", () => {
      const store = {
        Event: {
          nature: "miction"
        }
      };
      expect(getEventNatureSelector(store)).toEqual("miction");
    });

    it("should return normale for kind", () => {
      const store = {
        Event: {
          kind: "normale"
        }
      };
      expect(getEventKindSelector(store)).toEqual("normale");
    });

    it("should return +++ for measure", () => {
      const store = {
        Event: {
          measure: "+++"
        }
      };
      expect(getEventMeasureSelector(store)).toEqual("+++");
    });

    it("should return ['fuite'] for context", () => {
      const store = {
        Event: {
          contexts: ["fuite"]
        }
      };
      expect(getEventContextsSelector(store)).toEqual(["fuite"]);
    });
  });
});
