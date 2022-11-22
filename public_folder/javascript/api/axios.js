
export class AxiosRequest{
    #axiosFunction; #goodResult; #failResult;
    constructor(axiosFunction) { this.#axiosFunction = axiosFunction; }
    GoodResult = (goodResult) => { this.#goodResult = goodResult; return this; }
    BadResult = (failResult) => { this.#failResult = failResult; return this; }
    Builder = () => {
        if (typeof(this.#axiosFunction) !== 'function' ||  typeof(this.#goodResult) !== 'function' ) {alert('no functions entered inside axios');return;}
        if (typeof(this.#failResult) !== 'function') this.#failResult = () => {return;};
        ( async() => await axiosRequest( () => this.#axiosFunction(), (result) => this.#goodResult(result), (error) => this.#failResult(error) ) )()
    }
}

async function axiosRequest(axiosFunction, goodResult, failResult){
    ( async() => {try{
        const result = await axiosFunction();
        if(await result){ 
            try{ await goodResult(result);} 
            catch(e){alert('success result good result but error, no error handler!!!' + e);}
        }
        else {throw new Error()};
    }catch(error){ await failResult(error);}} )();
}