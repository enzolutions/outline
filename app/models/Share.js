// @flow
import BaseModel from "./BaseModel";
import User from "./User";

class Share extends BaseModel {
  id: string;
  url: string;
  documentTitle: string;
  documentUrl: string;
  createdBy: User;
  createdAt: string;
  updatedAt: string;
}

export default Share;
