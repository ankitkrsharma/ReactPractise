import { Provider } from "react-redux";
import { store } from "./Task/store";
import TicketList from "./Task/TicketList";
import TicketDetails from "./Task/TicketDetails";
import FilterPanel from "./Task/FilterPanel";
import SummaryHeader from "./Task/SummaryHeader";
import ActionPanel from "./Task/ActionPanel";

export default function App() {
  return (
    <Provider store={store}>

      <SummaryHeader />

      <FilterPanel />

      <TicketList />

      <TicketDetails />

      <ActionPanel />

    </Provider>
  );
}