/*
 * header.tsx
 * 
 * Copyright (c) 2019, not_a_seagull
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import { h, Component } from "preact";

import printerLogo from "./printer.svg";

const height = "40px";

export class Header extends Component<{}, {}> {
  innerRef: HTMLElement | null;

  constructor(props: {}) {
    super(props);

    this.innerRef = null;
  }

  updateInnerRef() {
    if (this.innerRef) {
      this.innerRef.innerHTML = printerLogo;
    }
  }

  setInnerRef(ref: HTMLElement | null) {
    this.innerRef = ref;
    this.updateInnerRef();
  }

  render() {
    return (
      <div id="header">
        <h1 id="logo" style={{"font-size": height}}>
          <span ref={this.setInnerRef.bind(this)} />
          Truevers國際出版社
        </h1>
        <div id="links">
          <div class="links">
            <a>News</a>
            <a>Entertainment</a>
            <a>Lifestyle</a>
            <a>Technology</a>
            <a>Environment</a>
            <a>Restoration</a>
            <a>Opinion</a>
          </div>
        </div>
      </div>
    );
  }
}
