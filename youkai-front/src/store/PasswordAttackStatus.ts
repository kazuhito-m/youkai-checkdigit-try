import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import moment from 'moment';
import AttackPasswordRange from '@/domain/youkai/attack/AttackPasswordRange';

@Module({
    name: 'PasswordAttackStatus',
    stateFactory: true,
    namespaced: true,
})
export default class PasswordAttackStatus extends VuexModule {
    private executing = false;
    private startPosition = "";
    private endPosition = "";
    private progressInfomation = "";
    private foundPassswords: string[] = [];

    private fromPassword = "";
    private toPassword = "";
    private attackedCount = 0;

    private nickName = "";

    public get nowExecuting(): boolean {
        return this.executing;
    }

    public get nowFromPassword(): string {
        return this.fromPassword;
    }

    public get nowToPassoword(): string {
        return this.toPassword;
    }

    public get nowStartPosition(): string {
        return this.startPosition;
    }

    public get nowEndPosition(): string {
        return this.endPosition;
    }

    public get nowProgressInfomation(): string {
        return this.progressInfomation;
    }

    public get nowFoundPasswords(): string[] {
        return this.foundPassswords;
    }

    @Mutation
    public setPasswordRange(fromPassword: string, toPassword: string) {
        this.fromPassword = fromPassword;
        this.toPassword = toPassword;
    }

    @Mutation
    public changeExecuteState(executing: boolean) {
        console.log("call changeExecuteState(" + executing);
        this.executing = executing;
    }

    @Mutation
    private changeFromPassword(fromPassword: string) {
        this.fromPassword = fromPassword;
    }

    @Mutation
    private changeProgressInfomation(progressInfomation: string) {
        this.progressInfomation = progressInfomation;
    }

    @Mutation
    private changeFoundPassswords(foundPassswords: string[]) {
        this.foundPassswords = foundPassswords;
    }

    @Mutation
    private changeAttackedCount(attackedCount: number): void {
        this.attackedCount = attackedCount;
    }

    @Mutation
    private changeStartPosition(startPosition: string) {
        this.startPosition = startPosition;
    }

    @Mutation
    private changeEndPosition(endPosition: string) {
        this.endPosition = endPosition;
    }

    @Action({ rawError: true })
    public cancel(): void {
        this.changeExecuteState(false);
    }

    @Action({ rawError: true })
    public onStart(): void {
        this.changeStartPosition("");
        this.changeEndPosition("");
        this.changeProgressInfomation("");
        this.changeFoundPassswords([]);
        this.changeAttackedCount(0);
    }

    @Action({ rawError: true })
    public onBeginAttackChunk(chunk: AttackPasswordRange): void {
        this.changeStartPosition(chunk.formPassword.toString());
        this.changeEndPosition(chunk.toPassword.toString());

        const startPos = chunk.formPassword;
        const now = moment().format('YYYY-MM-DD HH:mm:ss');
        const message = `${now} 開始位置:${startPos.toString()} ( ${startPos.dumpHexText()} )`;

        this.addInfomation(message);
    }

    @Action({ rawError: true })
    public onFinishAttackChunk(chunk: AttackPasswordRange): void {
        console.log("onFinishAttackChunk:" + chunk.toString());
    }

    @Action({ rawError: true })
    private addInfomation(text: string): void {
        console.log(text);
        const info = this.nowProgressInfomation;
        this.changeProgressInfomation(info + text + "\n");
    }
}
