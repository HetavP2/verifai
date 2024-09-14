import fetchVideo from '@/functions/fetchVideo';
import React from 'react'

export const Reel = () => {
    fetchVideo()
    return (
        <div className="col-span-3 sm:col-span-1">
            Reel
        </div>
      );
}
