import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PostType } from '../../types';
import client from '../api/client';

function useAllPosts() {
  const [data, setData] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);

      try {
        const response = await client.get<PostType[]>('/posts');

        setData(response.data);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        toast.error(err);
      }
    }

    fetchPosts();
  }, []);

  return {
    data,
    loading,
  };
}

export default useAllPosts;
