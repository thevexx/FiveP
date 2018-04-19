import { Document } from 'mongoose';

export interface File extends Document {
  readonly name: string;
  readonly url: string;
}
