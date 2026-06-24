import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllTickets: [
     {
      id: "T101",
      customerName: "Riya Sharma",
      issueTitle: "Unable to reset password",
      description:
        "Customer is not receiving password reset email.",
      status: "Open",
      priority: "High",
      assignedTo: "Aman",
      starred: false,
    },
    {
      id: "T102",
      customerName: "Karan Mehta",
      issueTitle: "Subscription payment failed",
      description:
        "Payment gets declined even though card is valid.",
      status: "In Progress",
      priority: "Medium",
      assignedTo: "Sneha",
      starred: true,
    },
    {
      id: "T103",
      customerName: "Neha Iyer",
      issueTitle: "App crashes on login",
      description:
        "Application closes immediately after entering credentials.",
      status: "Open",
      priority: "High",
      assignedTo: "Rahul",
      starred: false,
    },
    {
      id: "T104",
      customerName: "Arjun Rao",
      issueTitle: "Unable to download invoice",
      description:
        "Invoice download button is not responding.",
      status: "Resolved",
      priority: "Low",
      assignedTo: "Megha",
      starred: false,
    },
    {
      id: "T105",
      customerName: "Pooja Nair",
      issueTitle: "Profile update not saving",
      description:
        "Customer profile changes disappear after refresh.",
      status: "In Progress",
      priority: "Medium",
      assignedTo: "Aman",
      starred: true,
    },
  ],
  selectedTicketId: null,
  currentFilter: "All",
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,

  reducers: {
    selectTicket: (state, action) => {
      state.selectedTicketId = action.payload;
    },

    setFilter: (state, action) => {
      state.currentFilter = action.payload;
    },

    changeStatus: (state, action) => {
      const ticket = state.AllTickets.find(
        (t) => t.id === action.payload.id
      );

      if (ticket) {
        ticket.status = action.payload.status;
      }
    },

    changePriority: (state, action) => {
      const ticket = state.AllTickets.find(
        (t) => t.id === action.payload.id
      );

      if (ticket) {
        ticket.priority = action.payload.priority;
      }
    },

    toggleStar: (state, action) => {
      const ticket = state.AllTickets.find(
        (t) => t.id === action.payload
      );

      if (ticket) {
        ticket.starred = !ticket.starred;
      }
    },
  },
});

export const {
  selectTicket,
  setFilter,
  changeStatus,
  changePriority,
  toggleStar,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;