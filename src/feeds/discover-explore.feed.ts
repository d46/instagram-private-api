import { Expose, plainToClassFromExist } from 'class-transformer';
import { Feed } from '../core/feed';
import {
  DiscoverExploreFeedResponse,
  DiscoverExploreFeedResponseItem,
} from '../responses/discover-explore.feed.response';

export class DiscoverExploreFeed extends Feed<DiscoverExploreFeedResponse, DiscoverExploreFeedResponseItem> {
  @Expose()
  public nextMaxId: string;

  @Expose()
  public module: 'explore_popular' = 'explore_popular';

  @Expose()
  public isPrefetch?: boolean;

  @Expose()
  public lat?: number;

  @Expose()
  public lng?: number;

  set state(body: DiscoverExploreFeedResponse) {
    this.moreAvailable = !!body.more_available;
    this.nextMaxId = body.next_max_id;
  }

  async request() {
    // Add optionals only exist
    const optionals = ['isPrefetch', 'lat', 'lng'].reduce((acc, item) => {
      if (this[item]) {
        acc[item] = this[item];
      }
      return acc;
    }, {});

    const { body } = await this.client.request.send<DiscoverExploreFeedResponse>({
      url: `/api/v1/discover/explore/`,
      method: 'GET',
      qs: {
        ...optionals,
        module: this.module,
        max_id: this.nextMaxId,
        timezone_offset: this.client.state.timezoneOffset,
        session_id: this.client.state.clientSessionId,
      },
    });
    this.state = body;
    return body;
  }

  async items() {
    const body = await this.request();
    return body.items.map(item => plainToClassFromExist(new DiscoverExploreFeedResponseItem(), item));
  }
}
