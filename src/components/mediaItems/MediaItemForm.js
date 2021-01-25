import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const MediaItemForm = ({
  mediaItem,
  directors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{mediaItem.id ? "Edit" : "Add"} Media Item</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={mediaItem.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="directorId"
        label="Director"
        value={mediaItem.directorId || ""}
        defaultOption="Select Director"
        options={directors.map((director) => ({
          value: director.id,
          text: director.name,
        }))}
        onChange={onChange}
        error={errors.director}
      />

      <TextInput
        name="format"
        label="Format"
        value={mediaItem.format}
        onChange={onChange}
        error={errors.format}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

MediaItemForm.propTypes = {
  directors: PropTypes.array.isRequired,
  mediaItem: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default MediaItemForm;
