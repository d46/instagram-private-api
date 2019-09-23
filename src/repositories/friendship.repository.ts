import { Repository } from '../core/repository';
import {
  FriendshipRepositoryShowResponseRootObject,
  FriendshipRepositoryChangeResponseRootObject,
  FriendshipRepositoryChangeResponseFriendship_status,
} from '../responses';

export class FriendshipRepository extends Repository {
  async show(id: string | number) {
    const { body } = await this.client.request.send<FriendshipRepositoryShowResponseRootObject>({
      url: `/api/v1/friendships/show/${id}/`,
    });
    return body;
  }

  async showMany(userIds: string[] | number[]) {
    const { body } = await this.client.request.send({
      url: `/api/v1/friendships/show_many/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        user_ids: userIds.join(),
        _uuid: this.client.state.uuid,
      },
    });
    return body.friendship_statuses;
  }

  async block(id: string | number, mediaIdAttribution?: string) {
    return this.change('block', id, mediaIdAttribution);
  }

  async unblock(id: string | number, mediaIdAttribution?: string) {
    return this.change('unblock', id, mediaIdAttribution);
  }

  async create(id: string | number, mediaIdAttribution?: string) {
    return this.change('create', id, mediaIdAttribution);
  }

  async destroy(id: string | number, mediaIdAttribution?: string) {
    return this.change('destroy', id, mediaIdAttribution);
  }

  async approve(id: string | number, mediaIdAttribution?: string) {
    return this.change('approve', id, mediaIdAttribution);
  }

  async deny(id: string | number, mediaIdAttribution?: string) {
    return this.change('ignore', id, mediaIdAttribution);
  }

  async removeFollower(id: string | number) {
    return this.change('remove_follower', id);
  }

  async mute(id: string | number, type: 'story' | 'post' | 'all') {
    return this.muteOrUnMute('mute_posts_or_story_from_follow', id, type);
  }

  async unMute(id: string | number, type: 'story' | 'post' | 'all') {
    return this.muteOrUnMute('unmute_posts_or_story_from_follow', id, type);
  }

  private async muteOrUnMute(
    action: string,
    id: string | number,
    type: 'story' | 'post' | 'all',
  ): Promise<FriendshipRepositoryChangeResponseFriendship_status> {
    const muteParams: any = {};

    switch (type) {
      case 'story':
        muteParams.target_reel_author_id = id;
        break;
      case 'post':
        muteParams.target_posts_author_id = id;
        break;
      case 'all':
        muteParams.target_reel_author_id = id;
        muteParams.target_posts_author_id = id;
        break;
    }

    const response = await this.client.request.send<FriendshipRepositoryChangeResponseRootObject>({
      url: `/api/v1/friendships/${action}/`,
      method: 'POST',
      form: {
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        ...muteParams,
      },
    });

    return response.body.friendship_status;
  }

  private async change(action: string, id: string | number, mediaIdAttribution?: string) {
    const { body } = await this.client.request.send<FriendshipRepositoryChangeResponseRootObject>({
      url: `/api/v1/friendships/${action}/${id}/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        user_id: id,
        radio_type: this.client.state.radioType,
        _uid: this.client.state.cookieUserId,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        media_id_attribution: mediaIdAttribution,
      }),
    });
    return body.friendship_status;
  }
}
