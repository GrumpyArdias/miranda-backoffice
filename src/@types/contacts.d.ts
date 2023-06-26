export type CommentType = {
  id: string;
  commentDate: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  comment: boolean;
  action: boolean;
};

export interface ICommentState {
  comments: CommentType[];
  coment?: CommentType;
}
export type UpdateComment = {
  id: string;
  body: CommentType;
};
export interface CommentProps {
  headerArray: string[];
  rowDataArray: CommentType[];
}
