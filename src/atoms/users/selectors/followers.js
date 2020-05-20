import { selector } from 'recoil';

import { usernamesList } from '../index';
import api from '../../../services/api';


export const userToFollowerMap = selector({
  key: 'userToFollowerMap',
  get: async ({ get }) => {
    const _usernamesList = get(usernamesList);

    const reponses = await Promise.all(
        _usernamesList.map((username) => api.get(`/users/${username}`))
    );

    const followerMap = {};

    reponses.forEach((reponses) => {
      const { data: user } = reponses;

      followerMap[user.login] = user.followers;
    });


    return followerMap;
    },
});