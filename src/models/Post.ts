export class Post {

    private _id: string;
    private _userId: string;
    private _title: string;
    private _body: string;
    
	constructor(id: string, userId: string, title: string, body: string) {
		this._id = id;
		this._userId = userId;
		this._title = title;
		this._body = body;
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter userId
     * @return {string}
     */
	public get userId(): string {
		return this._userId;
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
		return this._body;
	}
    
}