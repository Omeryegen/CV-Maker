import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface resumeeState {
  "process": number,
  "step": number,
  "stepArray" : Array<string>,
  "image": string,
  "contact": {
    "name": string
    "surname": string
    "birthday": string
    "phone": string
    "adress": string
    "nationality": string
    "occupation": string
    "email": string
  },
  "education": Array<object>,
  "experience": Array<object>,
  "skills": Array<object>,
  "languages": Array<object>
  "socials": Array<object>,
  "theme": string,
  "summary": string
  "url": string
}



const initialState: resumeeState = {
    "process": 0,
    "step":0,
    "url": "",
    "stepArray" : ["Contact", "Education",  "Experience",  "Socials", "Skills/Languages", "Theme"],
    'image': "",
    "contact": {
      "name": "",
      "surname": "",
      "birthday": "",
      "phone": "",
      "adress": "",
      "nationality": "",
      "occupation": "",
      "email": "",
    },
   "education": [{university: "", start: "", end: "", department: ""}],
    "experience": [{company: "", position:"", start:"", end:""}],
    "skills": [{skill: "", skillLevel:50}],
    "languages": [{language: "", langLevel:"Beginner"}],
    "socials":[{platform: "", link:""}],
    "theme": "black",
    "summary": ""
}

export const resumeeSlice = createSlice({
  name: 'resumee',
  initialState,
  reducers: {
    processIncrement: (state) => {
      state.process += 20
    },
    processDecrement: (state) => {
      state.process -= 20
    },
    stepIncrement: (state) => {
      state.step += 1
    },
    stepDecrement: (state) => {
      state.step -= 1
    },
    changeStep: (state,action: PayloadAction<number>) =>{
      state.step = action.payload
    },
    changeInputValue: (state, action: PayloadAction<any>) =>{
      state.contact = {...state.contact, ...action.payload}
    },
    changeEducation: (state, action: PayloadAction<{index: number, data: object}>) =>{
      state.education[action.payload.index] = {...state.education[action.payload.index], ...action.payload.data}
    },
    addDeleteEducation: (state, action: PayloadAction<{index: number,command: string, data: object}>) =>{
      if(action.payload.command === "delete"){
        state.education.splice(action.payload.index, 1)
      }else if(action.payload.command === "add"){
        state.education.push(action.payload.data)
      }else{
        return
      } 
    },
    changeExperience: (state, action: PayloadAction<{index: number, data: object}>) =>{
      state.experience[action.payload.index] = {...state.experience[action.payload.index], ...action.payload.data}
    },
    addDeleteExperience: (state, action: PayloadAction<{index: number,command: string, data: object}>) =>{
      if(action.payload.command === "delete"){
        state.experience.splice(action.payload.index, 1)
      }else if(action.payload.command === "add"){
        state.experience.push(action.payload.data)
      }else{
        return
      } 
    },
    changeSkills: (state, action: PayloadAction<{index: number, data: object}>) =>{
      state.skills[action.payload.index] = {...state.skills[action.payload.index], ...action.payload.data}
    },
    addDeleteSkills: (state, action: PayloadAction<{index: number,command: string, data: object}>) =>{
      if(action.payload.command === "delete"){
        state.skills.splice(action.payload.index, 1)
      }else if(action.payload.command === "add"){
        state.skills.push(action.payload.data)
      }else{
        return
      } 
    },
    changeLangs: (state, action: PayloadAction<{index: number, data: object}>) =>{
      state.languages[action.payload.index] = {...state.languages[action.payload.index], ...action.payload.data}
    },
    addDeleteLangs: (state, action: PayloadAction<{index: number,command: string, data: object}>) =>{
      if(action.payload.command === "delete"){
        state.languages.splice(action.payload.index, 1)
      }else if(action.payload.command === "add"){
        state.languages.push(action.payload.data)
      }else{
        return
      } 
    },
    changeSocials: (state, action: PayloadAction<{index: number, data: object}>) =>{
      state.socials[action.payload.index] = {...state.socials[action.payload.index], ...action.payload.data}
    },
    addDeleteSocials: (state, action: PayloadAction<{index: number,command: string, data: object}>) =>{
      if(action.payload.command === "delete"){
        state.socials.splice(action.payload.index, 1)
      }else if(action.payload.command === "add"){
        state.socials.push(action.payload.data)
      }else{
        return
      } 
    },
    changeTheme: (state, action: PayloadAction<string>) =>{
      state.theme = action.payload
    },
    summaryChange: (state, action: PayloadAction<string>) =>{
      state.summary = action.payload
    },
    changeImage : (state, action: PayloadAction<string>) =>{
      state.image = action.payload
    },
    setUrl: (state, action) =>{
      state.url = action.payload
    }
  },
    
    
  },
)

// Action creators are generated for each case reducer function
export const { 
  processIncrement, 
  processDecrement, 
  stepDecrement, 
  stepIncrement, 
  changeInputValue, 
  changeEducation,
  addDeleteEducation,
  changeExperience,
  addDeleteExperience,
  addDeleteSkills,
  changeSkills,
  changeLangs,
  addDeleteLangs,
  changeSocials,
  addDeleteSocials,
  changeTheme,
  summaryChange,
  changeImage,
  changeStep,
  setUrl,
  
} = resumeeSlice.actions

export default resumeeSlice.reducer