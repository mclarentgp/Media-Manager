import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadMediaItems,
  saveMediaItem,
} from "../../redux/actions/mediaItemActions";
import { loadDirectors } from "../../redux/actions/directorActions";
import PropTypes from "prop-types";
import MediaItemForm from "./MediaItemForm";
import { newMediaItem } from "../../mockDb/mockData";
import Spinner from "../common/Spinner";
import { FormValidation } from "../common/FormValidation";

function ManageMediaItemPage({
  mediaItems,
  directors,
  loadDirectors,
  loadMediaItems,
  saveMediaItem,
  history,
  ...props
}) {
  const [mediaItem, setMediaItem] = useState({ ...props.mediaItem });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (mediaItems.length === 0) {
      loadMediaItems().catch((error) => {
        alert("Loading media items failed" + error);
      });
    } else {
      setMediaItem({ ...props.mediaItem });
    }

    if (directors.length === 0) {
      loadDirectors().catch((error) => {
        alert("Loading directors failed" + error);
      });
    }
  }, [props.mediaItem]);

  function handleChange(event) {
    const { name, value } = event.target;
    setMediaItem((prevMediaItem) => ({
      ...prevMediaItem,
      [name]: name === "directorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    if (!FormValidation(setErrors, mediaItem)) return;
    setSaving(true);
    saveMediaItem(mediaItem).then(() => {
      history.push("/mediaItems");
    });
  }

  return directors.length === 0 || mediaItem.legnth === 0 ? (
    <Spinner />
  ) : (
    <MediaItemForm
      mediaItem={mediaItem}
      errors={errors}
      directors={directors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageMediaItemPage.propTypes = {
  mediaItem: PropTypes.object.isRequired,
  directors: PropTypes.array.isRequired,
  mediaItems: PropTypes.array.isRequired,
  loadMediaItems: PropTypes.func.isRequired,
  loadDirectors: PropTypes.func.isRequired,
  saveMediaItem: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getMediaItemBySlug(mediaItems, slug) {
  return mediaItems.find((mediaItem) => mediaItem.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const mediaItem =
    slug && state.mediaItems.length > 0
      ? getMediaItemBySlug(state.mediaItems, slug)
      : newMediaItem;

  return {
    mediaItem,
    mediaItems: state.mediaItems,
    directors: state.directors,
  };
}

const mapDispatchToProps = {
  loadMediaItems,
  loadDirectors,
  saveMediaItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageMediaItemPage);
