import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        // 'API-KEY': '8763fc73-614f-4013-b502-549dd18f0f18', // owner
        'API-KEY': '2676877b-be72-48e3-92f4-61113ae50143', // myTestAccount
    },
})

export const API = {
    users: {
        getAllUsers(pageSize, currentPage) {
            return instance.get(`users?count=${pageSize}&page=${currentPage}`)
                .then((response) => {
                    return response.data;
                })
        },

        followUser(idUser) {
            return instance.post(`follow/${idUser}`)
                .then(response => {
                    return response.data;
                })
        },

        unfollowUser(idUser) {
            return instance.delete(`follow/${idUser}`)
                .then(response => {
                    return response.data;
                })
        },
    },
    profile: {
        getUserInfo(userId) {
            return instance.get(`profile/${userId}`)
                .then(response => {
                    return response.data;
                })
        },
        getStatusProfile(userId) {
            return instance.get(`/profile/status/${userId}`)
                .then(response => {
                    return response.data;
                })
        },
        updateStatusProfile(newStatus) {
            return instance.put(`/profile/status`, {status: newStatus});
        },
        updateProfile(profile) {
            return instance.put(`/profile`, profile);
        },
        updatePhotoProfile(imageFile) {
            let formDataImage = new FormData();
            formDataImage.append('image', imageFile);
            return instance.put(`/profile/photo`, formDataImage, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
    },
    security: {
        getCaptcha() {
            return instance.get('security/get-captcha-url')
        },
    },
    auth: {
        getAuth() {
            return instance.get('auth/me')
                .then((response) => {
                    return response.data;
                })
        },
        login(email, password, rememberMe, captcha = null) {
            return instance.post('auth/login', {email, password, rememberMe, captcha})
        },
        logout() {
            return instance.delete('auth/login')
        },
    },
}