import { Source } from "./Source";

export class News {
    private _source: Source;
    private _author: string;
    private _title: string;
    private _description: string;
    private _url: string;
    private _urlToImage: string;
    private _publishedAt: Date;
    private _content: string;

	constructor(source: Source, author: string, title: string, description: string, url: string, urlToImage: string, publishedAt: Date, content: string) {
		this._source = source;
		this._author = author;
		this._title = title;
		this._description = description;
		this._url = url;
		this._urlToImage = urlToImage;
		this._publishedAt = publishedAt;
		this._content = content;
	}

    /**
     * Getter source
     * @return {Source}
     */
	public get source(): Source {
		return this._source;
	}

    /**
     * Getter author
     * @return {string}
     */
	public get author(): string {
		return this._author;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter url
     * @return {string}
     */
	public get url(): string {
		return this._url;
	}

    /**
     * Getter urlToImage
     * @return {string}
     */
	public get urlToImage(): string {
		return this._urlToImage;
	}

    /**
     * Getter publishedAt
     * @return {Date}
     */
	public get publishedAt(): Date {
		return this._publishedAt;
	}

    /**
     * Getter content
     * @return {string}
     */
	public get content(): string {
		return this._content;
	}

    /**
     * Setter source
     * @param {Source} value
     */
	public set source(value: Source) {
		this._source = value;
	}

    /**
     * Setter author
     * @param {string} value
     */
	public set author(value: string) {
		this._author = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

    /**
     * Setter url
     * @param {string} value
     */
	public set url(value: string) {
		this._url = value;
	}

    /**
     * Setter urlToImage
     * @param {string} value
     */
	public set urlToImage(value: string) {
		this._urlToImage = value;
	}

    /**
     * Setter publishedAt
     * @param {Date} value
     */
	public set publishedAt(value: Date) {
		this._publishedAt = value;
	}

    /**
     * Setter content
     * @param {string} value
     */
	public set content(value: string) {
		this._content = value;
	}

}
