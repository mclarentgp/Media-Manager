import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadMediaItems } from "../../redux/actions/mediaItemActions";
import { loadDirectors } from "../../redux/actions/directorActions";
import PropTypes from "prop-types";
import MediaItemList from "./MediaItemList";
import Button from "@material-ui/core/Button";
import Spinner from "../common/Spinner";

function MediaItemsPage({
  mediaItems,
  directors,
  loadMediaItems,
  loadDirectors,
  history,
  loading,
}) {
  useEffect(() => {
    if (mediaItems.length === 0) {
      loadMediaItems().catch((error) => {
        alert("Loading media items failed" + error);
      });
    }

    if (directors.length === 0) {
      loadDirectors().catch((error) => {
        alert("Loading directors failed" + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Media Items</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => history.push("/mediaItem")}
          >
            Add Item
          </button>
          <MediaItemList mediaItems={mediaItems} />
        </>
      )}
    </>
  );
}

MediaItemsPage.propTypes = {
  mediaItems: PropTypes.array.isRequired,
  directors: PropTypes.array.isRequired,
  loadMediaItems: PropTypes.func.isRequired,
  loadDirectors: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    mediaItems:
      state.directors.length === 0
        ? []
        : state.mediaItems.map((mediaItem) => {
            return {
              ...mediaItem,
              directorName: state.directors.find(
                (a) => a.id === mediaItem.directorId
              ).name,
              directorSlug: state.directors.find(
                (a) => a.id === mediaItem.directorId
              ).slug,
            };
          }),
    directors: state.directors,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadMediaItems,
  loadDirectors,
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaItemsPage);
