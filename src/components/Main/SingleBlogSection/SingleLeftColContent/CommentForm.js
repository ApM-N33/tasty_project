import React from "react"

function CommentForm() {
  return (
    <>
      <h3 className="comment_form-title">Leave a comment</h3>
      <form className="comment-form p-5">
        <div className="input-wrap w-100">
          <label className="label mb-2">Name*</label>
          <input className="input w-100 mb-3" type="text" />
        </div>
        <div className="input-wrap w-100">
          <label className="label mb-2">Email*</label>
          <input className="input w-100 mb-3" type="email" />
        </div>
        <div className="input-wrap w-100">
          <label className="label mb-2">Website</label>
          <input className="input w-100 mb-3" type="text" />
        </div>
        <div className="input-wrap w-100">
          <label className="label mb-2">Message</label>
          <textarea className="textarea w-100 mb-3"></textarea>
        </div>
        <button className="sbmt-btn" type="submit">
          Post Comment
        </button>
      </form>
    </>
  )
}

export default CommentForm
