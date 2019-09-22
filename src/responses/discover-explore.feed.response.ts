export interface DiscoverExploreFeedResponse {
  rank_token: string;
  auto_load_more_enabled: boolean;
  more_available: boolean;
  next_max_id: string;
  max_id: string;
  items: DiscoverExploreFeedResponseItem[];
  num_results: number;
  status: string;
}

export class DiscoverExploreFeedResponseItem {
  media: DiscoverExploreFeedResponseMedia;
  explore_item_info: DiscoverExploreFeedResponseExploreItemInfo;
}

export interface DiscoverExploreFeedResponseMedia {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: string | number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  next_max_id: string;
  max_num_visible_preview_comments: number;
  preview_comments: DiscoverExploreFeedResponsePreviewComment[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  carousel_media_count?: number;
  carousel_media?: DiscoverExploreFeedResponseCarouselMedia[];
  can_see_insights_as_brand?: boolean;
  Tags: DiscoverExploreFeedResponseTags;
  lat: string;
  lng: string;
  user: DiscoverExploreFeedResponseUser;
  can_viewer_reshare: boolean;
  caption: DiscoverExploreFeedResponseCaption | null;
  caption_is_edited: boolean;
  like_count: number;
  has_liked: boolean;
  top_likers: any[];
  photo_of_you: boolean;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  image_versions2?: DiscoverExploreFeedResponseImageVersions2;
  original_width?: number;
  original_height?: number;
  usertags?: DiscoverExploreFeedResponseUsertags;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: DiscoverExploreFeedResponseVideoVersion[];
  has_audio?: boolean;
  video_duration?: number;
  view_count?: number;
  commenting_disabled_for_viewer?: boolean;
}

export interface DiscoverExploreFeedResponseCarouselMedia {
  id: string;
  media_type: number;
  image_versions2: DiscoverExploreFeedResponseImageVersions2;
  original_width: number;
  original_height: number;
  pk: string;
  carousel_parent_id: string;
  usertags?: DiscoverExploreFeedResponseUsertags;
  video_versions?: DiscoverExploreFeedResponseVideoVersion[];
  video_duration?: number;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
}

export interface DiscoverExploreFeedResponsePreviewComment {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: DiscoverExploreFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
  parent_comment_id?: string;
}

export interface DiscoverExploreFeedResponseImageVersions2 {
  candidates: DiscoverExploreFeedResponseCandidate[];
}

export interface DiscoverExploreFeedResponseCandidate {
  width: number;
  height: number;
  url: string;
}

export interface DiscoverExploreFeedResponseTags {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: string;
  lat: string;
  external_source: string;
  facebook_places_id: string;
}

export interface DiscoverExploreFeedResponseFriendshipStatus {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
}

export interface DiscoverExploreFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  user: DiscoverExploreFeedResponseUser;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  media_id: string;
  has_translation?: boolean;
}

export interface DiscoverExploreFeedResponseUsertags {
  in: DiscoverExploreFeedResponseIn[];
}

export interface DiscoverExploreFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  is_verified?: boolean;
  friendship_status?: DiscoverExploreFeedResponseFriendshipStatus;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
}

export interface DiscoverExploreFeedResponseIn {
  user: DiscoverExploreFeedResponseUser;
  position: number[] | string[];
  start_time_in_video_in_sec: null;
  duration_in_video_in_sec: null;
}

export interface DiscoverExploreFeedResponseExploreItemInfo {
  num_columns: number;
  total_num_columns: number;
  aspect_ratio: number;
  autoplay: boolean;
}

export interface DiscoverExploreFeedResponseVideoVersion {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
