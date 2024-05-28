



import {membershipData,benefitData} from '../data/membership-data.js'

const dataSources = {
    "membership-data": membershipData,
    "benefit-data": benefitData
}

const MembershipContainer = (memberContents) =>{
    return `
    <section class="flex justify-center">
            <section class="max-w-[91%] h-full">
                <div class="scroll-info container">
                    <div class="scroll-des">
                        <h1>Member Benefits</h1>
                    </div>
                    <div class="scroll-icon">
                        <button class="link-arrow" onclick="pushArrow(0,-1)">
                            <div class="circle-icon icon-left">
                            <img src="../assets/Image/arrow-left.svg" alt="Left Arrow" />
                            </div>
                        </button>
                        <button class="link-arrow" onclick="pushArrow(0,1)">
                            <div class="circle-icon icon-right">
                            <img src="../assets/Image/arrow-right.svg" alt="Right Arrow" />
                            </div>
                        </button>
                    </div>
                </div>
                <ul class="w-[100%] grid grid-cols-[repeat(${memberContents.length},450px)] overflow-auto slideShow">
                    ${memberContents.map(items => `
                        <li class="p-[5px] slide-list">
                            <a class="" href=""> 
                                <div class="">
                                    <div class="relative">
                                        <div class="">
                                            <img src="${items.imgMember}" alt="" />
                                        </div>
                                        <div class="absolute bottom-10 left-10 text-white flex flex-col gap-5">
                                            <h3 class="capitalize text-[18px] ">${items.titleMember}</h3>
                                            <h1 class="capitalize text-[25px] ">${items.desMember}</h1>
                                            <button class="capitalize text-[20px] bg-white text-black px-3 py-2 rounded-[30px] max-w-[120px]">${items.btnMember}</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    `).join("")}
                </ul>
            </section>
        </section>
    `
}

class MemberShipSlider extends HTMLElement {
  connectedCallback() {
    const dataSource = this.getAttribute("data-source");
    const data = dataSources[dataSource];
    this.innerHTML = MembershipContainer(data);
  }
}

customElements.define("membership-slidercomponent", MemberShipSlider);