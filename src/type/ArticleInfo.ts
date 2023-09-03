export default class ArticleInfo {
    public readonly id: Number                              // 文章列表
    public readonly title: String                           // 文章 id
    public readonly content: String                         // 文章标题
    public readonly url: String                             // 文章内容
    public readonly publisherId: Number                     //
    public readonly publisherUsername: String               // 作者 id
    public readonly publisherHomeUrl: String                // 作者名称
    public readonly publisherProfilePictureUrl: String      // 作者主页地址

    constructor(id: Number,
                title: String,
                content: String,
                url: String,
                publisherId: Number,
                publisherUsername: String,
                publisherHomeUrl: String,
                publisherProfilePictureUrl: String) {
        this.id = id
        this.title = title
        this.content = content
        this.url = url
        this.publisherId = publisherId
        this.publisherUsername = publisherUsername
        this.publisherHomeUrl = publisherHomeUrl
        this.publisherProfilePictureUrl = publisherProfilePictureUrl
    }
}