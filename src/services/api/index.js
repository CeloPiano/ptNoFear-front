import axios from 'axios'

class CJRNoFearApi {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_NO_FEAR_API_URL,
      withCredentials: true,
    })
  }

  setAccessToken(token) {
    this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  removeAccessToken() {
    delete this.api.defaults.headers.common['Authorization']
  }

  async refreshToken() {
    const response = await this.api.get('/auth/refresh')

    this.setAccessToken(response.data.access_token)

    return { expires_in: response.data.expires_in }
  }

  async login(token) {
    const response = await this.api.post('/auth/google', { token })
    this.setAccessToken(response.data.access_token)

    return { user: response.data.user, expires_in: response.data.expires_in }
  }

  async logout() {
    const response = await this.api.post('/auth/logout')

    this.removeAccessToken()

    return response.data
  }

  async getCurrentUser() {
    const response = await this.api.get('/users/me')
    return response.data
  }

  async getUsers() {
    const response = await this.api.get('/users')
    return response.data
  }

  async turnInAdmin(id){
    const response = await this.api.patch(`/users/${id}`)
    return response.data
  }

  async createSemester(name){
    const response = await this.api.post('/semesters/create',{name})
    return response.data
  }
  
  async getSemesters() {
    const response = await this.api.get('/semesters')
    return response.data
  }

  async deleteSemester(id) {
    const response = await this.api.post('/semesters/delete',{id})
    return response.data
  }

  async updateSemester(id,name){
    const response = await this.api.patch(`/semesters/${id}`,{name})
    return response.data
  }

  async createTheme(name){
    const response = await this.api.post('/themes/create',{name})
    return response.data
  }
  
  async getThemes() {
    const response = await this.api.get('/themes')
    return response.data
  }

  async deleteTheme(id) {
    const response = await this.api.post('/themes/delete',{id})
    return response.data
  }

  async updateTheme(id,name){
    const response = await this.api.patch(`/themes/${id}`,{name})
    return response.data
  }

  async createLesson(Lesson){
    const response = await this.api.post('/lessons/create',Lesson)
    return response.data
  }

  async updateLesson(id,Lesson){
    const response = await this.api.patch(`/lessons/${id}`,Lesson)
    return response.data
  }

  async getLessons(){
    const response = await this.api.get('/lessons')
    return response.data
  }

  async getLesson(id){
    const response = await this.api.get(`/lessons/${id}`)
    return response.data
  }

  async getTheme(id){
    const response = await this.api.get(`/themes/${id}`)
    return response.data
  }

  async getSemester(id){
    const response = await this.api.get(`/semesters/${id}`)
    return response.data
  }

  async deleteLesson(id) {
    const response = await this.api.post('/lessons/delete',{id})
    return response.data
  }
}

const cjrNoFearApi = new CJRNoFearApi()

export default cjrNoFearApi
