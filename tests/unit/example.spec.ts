import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';

// test if the button is rendered
describe('HomeView.vue', () => {
  it('renders button in the center of the screen', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.find('button').exists()).toBe(true);
  });
});
