import axios from "axios";

export default {
  getGoals: function() {
    return axios.get("/api/goals");
  },
  getGoal: function(id) {
    return axios.get("/api/goals/" + id);
  },
  saveGoal: function(goalData) {
    return axios.post("/api/goals", goalData);
  }
};
