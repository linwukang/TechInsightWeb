export default class UserInfo {
    id: number
    username: string
    phoneNumber: string
    dateOfBirth: Date
    gender: string
    profilePicture: string
    bio: string


    constructor(id: number, username: string, phoneNumber: string, dateOfBirth: Date, gender: string, profilePicture: string, bio: string) {
        this.id = id;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.profilePicture = profilePicture;
        this.bio = bio;
    }
}