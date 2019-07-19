import {
  REFRESH_EVENTS,
  refreshEvents,
  UPDATE_SELECTED_DATE,
  updateSelectedDate
} from "./events.action";
import history from "./events.reducer";
import { getSelectedDateSelector, getEventsSelector } from "./events.selector";

describe("# history", () => {
  describe("## actions", () => {
    it("should create an action to refresh history", () => {
      const events = [
        {
          id: 1,
          date: "2019-07-01T13:42:13.063Z",
          type: "Normale",
          nature: "Miction",
          volume: "+ +",
          context: ["Fuite", "Difficulté"],
          comment: "",
          userId: 1,
          createdAt: "2019-07-01T13:42:22.928Z",
          updatedAt: "2019-07-01T13:42:22.928Z",
          userUuid: null
        }
      ];
      const expectedAction = {
        type: REFRESH_EVENTS,
        events
      };
      expect(refreshEvents(events)).toEqual(expectedAction);
    });
    it("should create an action to update selected date", () => {
      const date = "2019-07-01T13:42:22.928Z";
      const expectedAction = {
        type: UPDATE_SELECTED_DATE,
        date
      };
      expect(updateSelectedDate(date)).toEqual(expectedAction);
    });
  });

  describe("## reducer", () => {
    it("should return the initial state", () => {
      expect(
        history(
          {
            events: [],
            selectedDate: "2019-07-01T13:42:22.928Z"
          },
          {}
        )
      ).toEqual({
        events: [],
        selectedDate: "2019-07-01T13:42:22.928Z"
      });
    });

    it("should handle REFRESH_EVENTS", () => {
      expect(
        history(
          { events: [] },
          {
            type: REFRESH_EVENTS,
            events: [
              {
                id: 1,
                date: "2019-07-01T13:42:13.063Z",
                type: "Normale",
                nature: "Miction",
                volume: "+ +",
                context: ["Fuite", "Difficulté"],
                comment: "",
                userId: 1,
                createdAt: "2019-07-01T13:42:22.928Z",
                updatedAt: "2019-07-01T13:42:22.928Z",
                userUuid: null
              }
            ]
          }
        )
      ).toEqual({
        events: [
          {
            id: 1,
            date: "2019-07-01T13:42:13.063Z",
            type: "Normale",
            nature: "Miction",
            volume: "+ +",
            context: ["Fuite", "Difficulté"],
            comment: "",
            userId: 1,
            createdAt: "2019-07-01T13:42:22.928Z",
            updatedAt: "2019-07-01T13:42:22.928Z",
            userUuid: null
          }
        ]
      });

      expect(
        history(
          {
            events: []
          },
          {
            type: REFRESH_EVENTS,
            events: [
              {
                id: 1,
                date: "2019-07-01T13:42:13.063Z",
                type: "Normale",
                nature: "Miction",
                volume: "+ +",
                context: ["Fuite", "Difficulté"],
                comment: "",
                userId: 1,
                createdAt: "2019-07-01T13:42:22.928Z",
                updatedAt: "2019-07-01T13:42:22.928Z",
                userUuid: null
              }
            ]
          }
        )
      ).toEqual({
        events: [
          {
            id: 1,
            date: "2019-07-01T13:42:13.063Z",
            type: "Normale",
            nature: "Miction",
            volume: "+ +",
            context: ["Fuite", "Difficulté"],
            comment: "",
            userId: 1,
            createdAt: "2019-07-01T13:42:22.928Z",
            updatedAt: "2019-07-01T13:42:22.928Z",
            userUuid: null
          }
        ]
      });
    });

    it("should handle UPDATE_SELECTED_DATE", () => {
      expect(
        history(
          { events: [], selectedDate: new Date() },
          {
            type: UPDATE_SELECTED_DATE,
            date: "2019-07-01T13:42:22.928Z"
          }
        )
      ).toEqual({
        events: [],
        selectedDate: "2019-07-01T13:42:22.928Z"
      });
    });
  });

  describe("## selectors", () => {
    it("should return [] for history", () => {
      const store = {
        Events: {
          events: [],
          selectedDate: "2019-07-01T13:42:22.928Z"
        }
      };
      expect(getEventsSelector(store)).toEqual([]);
    });

    it("should return the date for selectHistoryDate", () => {
      const store = {
        Events: {
          events: [],
          selectedDate: "2019-07-01T13:42:22.928Z"
        }
      };
      expect(getSelectedDateSelector(store)).toEqual(
        "2019-07-01T13:42:22.928Z"
      );
    });
  });
});
