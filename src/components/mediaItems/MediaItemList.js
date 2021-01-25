import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MediaItemList = ({ mediaItems }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Director</th>
        <th>Format</th>
      </tr>
    </thead>
    <tbody>
      {mediaItems.map((mediaItem) => {
        return (
          <tr key={mediaItem.id}>
            <td>
              <a
                className="btn btn-light"
                href={`https://www.imdb.com/find?q=${mediaItem.slug}&ref_=nv_sr_sm`}
              >
                Imdb Search
              </a>
            </td>
            <td>
              <Link to={"/mediaItem/" + mediaItem.slug}>{mediaItem.title}</Link>
            </td>
            <td>
              <Link to={"/director/" + mediaItem.directorSlug}>
                {mediaItem.directorName}
              </Link>
            </td>
            <td>{mediaItem.format}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

MediaItemList.propTypes = {
  mediaItems: PropTypes.array.isRequired,
};

export default MediaItemList;
