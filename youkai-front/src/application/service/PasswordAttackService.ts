import PasswordAttackWorker from 'worker-loader!~/application/worker/passwordattack/PasswordAttack.worker';
import AttackPasswordRange from "@/domain/youkai/attack/AttackPasswordRange";
import PasswordAttackStatus from "~/store/PasswordAttackStatus";
import ExecuteOrder from '@/application/worker/passwordattack/order/ExecuteOrder';
import CancelOrder from '@/application/worker/passwordattack/order/CancelOrder';
import WorkerResult from '@/application/worker/passwordattack/result/WorkerResult';
import { ResultType } from '@/application/worker/passwordattack/result/ResultType';

export default class PasswordAttackService {
    private worker: PasswordAttackWorker | null = null;

    public execute(passwordRange: AttackPasswordRange, status: PasswordAttackStatus): void {
        console.log("execute() : " + passwordRange);
        status.changeExecuteState(true);

        status.setPasswordRange(
            passwordRange.formPassword.toString(),
            passwordRange.toPassword.toString()
        );

        this.worker = new PasswordAttackWorker();
        this.worker.onmessage = (event: MessageEvent) => {
            const result = event.data as WorkerResult;
            console.log(`operationType(worker to coller):${result}`);
            const resType = result.result;
            if (resType === ResultType.START) this.onStart(status);
            if (resType === ResultType.EXIT) this.onExit(status);
        };

        const order = new ExecuteOrder(
            passwordRange.formPassword.toString(),
            passwordRange.toPassword.toString(),
        );
        this.worker.postMessage(order);
    }

    public onExit(status: PasswordAttackStatus) {
        if (!this.worker) return;
        this.worker.postMessage(new CancelOrder());
        this.worker?.terminate();
        this.worker = null;
        status.changeExecuteState(false);
    }

    private onStart(status: PasswordAttackStatus) {
        status.onStart();
    }
}