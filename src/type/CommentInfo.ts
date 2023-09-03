export default class CommentInfo {
    readonly id: number
    readonly publisherId: number
    readonly profilePicture: string
    readonly userId: number
    readonly username: string
    readonly publishDate: Date
    readonly content: string
    readonly likes: number
    readonly dislikes: number

    constructor(id: number,
                publisherId: number,
                profileUrl: string,
                userId: number,
                username: string,
                publishDate: Date,
                content: string,
                likes: number,
                dislikes: number) {
        this.id = id
        this.publisherId = publisherId
        this.profilePicture = profileUrl
        this.userId = userId
        this.username = username
        this.publishDate = publishDate
        this.content = content
        this.likes = likes
        this.dislikes = dislikes
    }

    static of(obj: any): CommentInfo {
        return new CommentInfo(
            obj.id,
            obj.publisherId,
            obj.profilePicture,
            obj.userId,
            obj.username,
            new Date(obj.publishDate),
            obj.content,
            obj.likes,
            obj.dislikes
        )
    }
}