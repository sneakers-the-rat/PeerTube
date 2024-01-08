import { VideoUpdate } from '../video-update.model.js'

export interface VideoImportCreate extends VideoUpdate {
  targetUrl?: string
  magnetUri?: string
  torrentfile?: Blob
  file?: string

  channelId: number // Required
}
