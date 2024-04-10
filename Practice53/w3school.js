let johnRoom = {
    table: `johns table`,
    cleanTablea: function(){
        console.log(this.table, ` is supposed to be cleaned.`)
    }
}

johnRoom.cleanTablea()