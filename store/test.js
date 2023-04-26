export const state = () => ({
    myData  : []
})




export const mutations = {
    setTestData  : (state , data) => {
        state.myData  = {
            ...data
        }
    }
}



export const actions = {
    setTestData : (vuexContext , data) => {
        vuexContext.commit('setTestData' , data)
    }
}



export const getters = {
    getMyData(state){
        return state.myData
    }   
}


