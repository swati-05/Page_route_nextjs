import React from 'react';
import Link from 'next/link'

export default function create() {
  return (
    <div>
        <h1>Create</h1>
        <Link href="/crud/update/12" legacyBehavior>
          <a>Update</a>
        </Link>
    </div>
  )
}
