export class PublishArticleDto
{
    Title: string
    Content: string
    UserId: number
    Tags: string[]

    constructor(Title: string, Content: string, UserId: number, Tags: string[]) {
        this.Title = Title;
        this.Content = Content;
        this.UserId = UserId;
        this.Tags = Tags;
    }
}