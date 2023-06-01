
export type CommentType = {
    id: string;
    date: string;
    full_name: string;
    email: string;
    phone: string;
    subjet: string;
    coment: boolean;
    action: boolean;
}

export interface ICommentState {
    comments: CommentType[];
    coment?: CommentType
}
export type UpdateComment = {
    id: string;
    body: CommentType
}
export interface CommentProps {
    headerArray: string[];
    rowDataArray: CommentType[];
}