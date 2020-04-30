export default class WORKER
{
    constructor(js){
        this._worker = new Worker(js);
    }
    postMessage( message){
        this._worker.postMessage(message);
    }
    onMessage( callback)
    {
        this._worker.onmessage(callback);
    }
    terminate(){
        this._worker.terminate();
    }
}