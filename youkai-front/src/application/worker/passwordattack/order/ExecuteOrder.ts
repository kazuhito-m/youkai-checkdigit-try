import { OrderType } from "./OrderType";
import WorkerOrder from "./WorkerOrder";

export default class ExecuteOrder implements WorkerOrder {
    constructor(
        public readonly fromPasswordText: string,
        public readonly toPasswordText: string,
    ) { }

    public order = OrderType.EXECUTE;
}
