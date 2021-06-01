import { useHistory } from 'react-router-dom';

export default class HistoryWrapper {

  static history: ReturnType<typeof useHistory> | null;

  static initHistory(history: ReturnType<typeof useHistory>): void {
    HistoryWrapper.history = history;
  }

}
