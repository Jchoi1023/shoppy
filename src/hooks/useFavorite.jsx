import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addFavorite, getFavorite, removeFavorite } from '../api/firebase';
import { useAuthContext } from '../components/context/AuthContext';

export default function useFavorite() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const favoriteQuery = useQuery(
    ['favorite', uid || ''],
    () => getFavorite(uid),
    {
      enabled: !!uid,
    }
  );

  const addFavoriteItem = useMutation((product) => addFavorite(uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['favorite', uid]);
    },
  });

  const removeFavoriteItem = useMutation((id) => removeFavorite(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['favorite', uid]);
    },
  });
  return { favoriteQuery, addFavoriteItem, removeFavoriteItem };
}
