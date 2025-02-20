import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();
    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const createdPost = postsService.create(post);
    expect(createdPost).toHaveProperty('id');
    expect(createdPost).toHaveProperty('date');
    expect(createdPost.text).toBe(post.text);
  });

  it('should find a post', () => {
    const createdPost = postsService.create({ text: 'Post for finding' });
    const foundPost = postsService.find(createdPost.id); 
    expect(foundPost).toEqual(createdPost);
  });
});