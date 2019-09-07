const EventEmitter = require('events')

class Job extends EventEmitter {
    constructor(ops){
        super(ops)
        this.on('start',()=>{
            this.process()
        })
    }
    process(){
        setTimeout(()=>{
            this.emit('done', { completedOn: new Date()})
        },700)
    }
}


job = new  Job();
job.on('done',(details)=>( console.log('job completed on',details.completedOn)))

job.emit('start')

