/* @flow */
export type User = {|
  +id: number,
  +first_name: string,
  +last_name: string,
  +email: string,
  +created_at: Date,
  +updated_at: Date,
  +password: string,
  +api_key: string,
  +fullName: ?string,
  +initials: ?string,
|}

export type Document = {|
  +country: string,
  +created_at: Date,
  +document_type: 'excel' | 'word' | 'pdf',
  +id: number,
  +modified_by: string,
  +name: string,
  +stared: boolean,
  +status: string,
  +title: string,
  +updated_at: Date,
|}

export type DocumentModel = {|
  documents: Array<Document>,
  inProgress: boolean,
  error: boolean,
|}

export type AppModel = {|
  searchedPhrase: string,
|}

export type AuthModel = {|
  user: ?User,
  inProgress: boolean,
  error: boolean,
|}

export type State = {
  appReducer: AppModel,
  authReducer: AuthModel,
  documentsReducer: DocumentModel,
}
