let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log( this.step );
        return this;
    }
}

ladder.showStep()
ladder.up()
ladder.up()
ladder.showStep()
ladder.down()
ladder.showStep()
