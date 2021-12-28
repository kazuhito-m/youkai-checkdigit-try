import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import AttackPasswordRange from '@/domain/youkai/attack/AttackPasswordRange';

@Module({
    name: 'PasswordAttacker',
    stateFactory: true,
    namespaced: true,
})
export default class PasswordAttacker extends VuexModule {
    private executing = false;
    private startPosition = "";
    private endPosition = "";
    private progressText = "";
    private foundPassswords: string[] = [];

    private fromPassword = "";
    private attackedCount = 0;

    private nickName = "";

    public get nowExecuting(): boolean {
        return this.executing;
    }

    public get nowFromPassword(): string {
        return this.fromPassword;
    }

    @Mutation
    private changeExecuteState(executing: boolean) {
        console.log("changeExecuteState()は呼べてる。" + executing)
        this.executing = executing;
    }

    @Mutation
    private changeFromPassword(fromPassword: string) {
        this.fromPassword = fromPassword;
    }

    @Mutation
    private changeProgressText(progressText: string) {
        this.progressText = progressText;
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
    public execute(passwordRange: AttackPasswordRange): void {
        // this.changeExecuteState(true);
        // new Promise((resolve, reject) => {
        //     try {
        //         this.attack(passwordRange);
        //         this.changeExecuteState(false);
        //         resolve(0);
        //     } catch (e) {
        //         this.changeExecuteState(false);
        //         reject(e)
        //     }
        // });
        // p.then(() => {
        //     this.changeExecuteState(false);
        // }).catch(e => {
        //     console.log(e);
        //     this.changeExecuteState(false);
        // });



        console.log("即抜ける");
        console.log(passwordRange.toString());
    }

    @Action({ rawError: true })
    public cancel(): void {
        this.changeExecuteState(false);
    }

    private static readonly CHANK_DIVIDE_POS = 6;

    @Action({ rawError: true })
    private attack(passwordRange: AttackPasswordRange): void {
        this.onStart(passwordRange);

        let chunk = AttackPasswordRange.createChunk(passwordRange.formPassword, PasswordAttacker.CHANK_DIVIDE_POS);

        while (this.executing) {
            this.onBeginAttackChunk(chunk);

            this.attackChunk(chunk);

            this.onFinishAttackChunk(chunk);

            if (chunk.toPassword.equals(passwordRange.toPassword)) break;
            chunk = chunk.nextChunk(PasswordAttacker.CHANK_DIVIDE_POS, passwordRange);
        }

        this.changeExecuteState(false);
    }

    @Action({ rawError: true })
    private attackChunk(chunk: AttackPasswordRange): void {
        console.log("attackChunk()に来ている。")
        console.log(chunk.toString());
    }

    @Action({ rawError: true })
    private onStart(passwordRange: AttackPasswordRange): void {
        this.changeFromPassword(passwordRange.formPassword.toString());
        this.changeProgressText("");
        this.changeFoundPassswords([]);
        this.changeAttackedCount(0);
    }

    @Action({ rawError: true })
    private onBeginAttackChunk(chunk: AttackPasswordRange): void {
        this.changeStartPosition(chunk.formPassword.toString());
        this.changeEndPosition(chunk.formPassword.toString());
        this.addInfomation(this.makeInfoTextOf(chunk));
    }


    @Action({ rawError: true })
    private onFinishAttackChunk(chunk: AttackPasswordRange): void {
        console.log("onFinishAttackChunk:" + chunk.toString());
    }

    @Action({ rawError: true })
    private addInfomation(text: string): void {
        console.log(text);

    }

    @Action({ rawError: true })
    private makeInfoTextOf(chunk: AttackPasswordRange): string {
        console.log("makeInfoTextOf()" + chunk.toString());
        return "";
    }
}