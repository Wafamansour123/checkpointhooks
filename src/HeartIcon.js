import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const HeartIcon = () => {
  const [liked, setLiked] = useState(false);
  return (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={() => setLiked(!liked)}
      style={{ color: liked ? 'red' : 'gray', cursor: 'pointer' }}
    />
  );
};

export default HeartIcon;
